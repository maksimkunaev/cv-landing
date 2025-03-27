import ViewPortObserver from "@/utils/viewPortObserver.js";
import { sections } from "~/constants/cv";

export default {
  data() {
    return {
      activeTab: "",
      tabs: {},
    };
  },
  computed: {
    computedActiveTab() {
      const tabs = Object.entries(this.tabs)
        .sort((a, b) => b[1] - a[1])
        .filter((a) => a[1]);

      return tabs.length ? tabs[0][0] : null;
    },
  },
  mounted() {
    const observer = new ViewPortObserver();
    observer.onVisibilityChange = (
      isIntersecting,
      intersectionRatio,
      targetId
    ) => {
      this.$set(this.tabs, targetId, isIntersecting ? intersectionRatio : 0);
    };
    sections.forEach(({ link }) => {
      const achorElement = document.querySelector(`#${link}`);
      observer.observe(achorElement);
    });
  },
  methods: {
    changeVisibleElement(isVisbible, linkId) {
      if (isVisbible) {
        this.activeTab = linkId;
      }
    },
  },
};
