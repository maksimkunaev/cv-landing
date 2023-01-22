class ViewPortObserver {
  constructor() {
    let options = {
      rootMargin: "0px",
      threshold: [0.05, 0.25, 0.5, 1],
    };

    const callback = (entries) => {
      const entry = entries[0] || {};
      const { isIntersecting, intersectionRatio } = entry;

      this.onVisibilityChange(
        isIntersecting,
        intersectionRatio,
        entry.target.id
      );
    };

    this.observer = new IntersectionObserver(callback, options);
  }

  observe(achorElement) {
    this.observer.observe(achorElement);
  }

  onVisibilityChange() {}
}

export default ViewPortObserver;
