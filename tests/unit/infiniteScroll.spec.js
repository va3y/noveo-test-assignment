import InfiniteScroll from "@/components/InfiniteScroll.vue";
import { shallowMount } from "@vue/test-utils";

describe("dogCard", () => {
  test("Emits 'loadMore' after scrolling down", async () => {
    const $store = {
      state: {
        count: 25
      },
      commit: jest.fn()
    };
    const wrapper = shallowMount(InfiniteScroll, {
      global: {
        mocks: {
          $store
        }
      }
    });
    // document.documentElement.offsetHeight equals 0
    // they need to be the same in order for scroll event listener to trigger
    window.pageYOffset = 0;
    window.innerHeight = 0;
    window.dispatchEvent(new Event("scroll"));
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty("loadMore");
    }, 1000);
  });
});
