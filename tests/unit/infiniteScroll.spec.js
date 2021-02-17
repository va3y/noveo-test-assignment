import InfiniteScroll from "@/components/InfiniteScroll.vue";
import { mount } from "@vue/test-utils";

describe("dogCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(InfiniteScroll);
  });

  test("Emits 'loadMore' after scrolling down", async () => {
    // document.documentElement.offsetHeight equals 0
    // they need to be equal in order for scroll event listener to work
    document.documentElement.scrollTop = 0;
    window.innerHeight = 0;
    window.dispatchEvent(new Event("scroll", {}));
    expect(wrapper.emitted()).toHaveProperty("loadMore");
  });
});
