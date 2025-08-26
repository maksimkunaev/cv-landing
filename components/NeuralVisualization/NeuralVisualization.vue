<template>
  <canvas
    ref="canvasRef"
    class="network-canvas"
  ></canvas>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'NetworkAnimation',
  props: {
    primaryColor: {
      type: String,
      default: '#00bcd4'
    },
    secondaryColor: {
      type: String,
      default: '#ffc107'
    },
    nodeCount: {
      type: Number,
      default: 80
    },
    connectionDistance: {
      type: Number,
      default: 150
    },
    speed: {
      type: Number,
      default: 0.5
    }
  },
  setup(props) {
    const canvasRef = ref(null)
    const animationRef = ref(null)
    const nodes = ref([])
    
    const initCanvas = () => {
      const canvas = canvasRef.value
      if (!canvas) return
      
      const resize = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        initNodes()
      }
      
      resize()
      window.addEventListener('resize', resize)
      
      return () => window.removeEventListener('resize', resize)
    }
    
    const initNodes = () => {
      const canvas = canvasRef.value
      if (!canvas) return
      
      nodes.value = []
      for (let i = 0; i < props.nodeCount; i++) {
        nodes.value.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * props.speed,
          vy: (Math.random() - 0.5) * props.speed,
          size: Math.random() * 3 + 2
        })
      }
    }
    
    const animate = () => {
      const canvas = canvasRef.value
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw nodes
      nodes.value.forEach(node => {
        // Move
        node.x += node.vx
        node.y += node.vy
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        
        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
        
        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = props.primaryColor
        ctx.fill()
      })
      
      // Draw connections
      ctx.strokeStyle = props.secondaryColor
      ctx.lineWidth = 1
      
      for (let i = 0; i < nodes.value.length; i++) {
        for (let j = i + 1; j < nodes.value.length; j++) {
          const dx = nodes.value[i].x - nodes.value[j].x
          const dy = nodes.value[i].y - nodes.value[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < props.connectionDistance) {
            const opacity = 1 - (distance / props.connectionDistance)
            ctx.globalAlpha = opacity * 0.5
            ctx.beginPath()
            ctx.moveTo(nodes.value[i].x, nodes.value[i].y)
            ctx.lineTo(nodes.value[j].x, nodes.value[j].y)
            ctx.stroke()
          }
        }
      }
      
      ctx.globalAlpha = 1
      animationRef.value = requestAnimationFrame(animate)
    }
    
    const startAnimation = () => {
      if (animationRef.value) {
        cancelAnimationFrame(animationRef.value)
      }
      animate()
    }
    
    // Watch for prop changes
    watch(() => props.nodeCount, () => {
      initNodes()
    })
    
    onMounted(() => {
      const cleanup = initCanvas()
      startAnimation()
      
      onUnmounted(() => {
        if (animationRef.value) {
          cancelAnimationFrame(animationRef.value)
        }
        if (cleanup) cleanup()
      })
    })
    
    return {
      canvasRef
    }
  }
}
</script>

<style scoped>
.network-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>