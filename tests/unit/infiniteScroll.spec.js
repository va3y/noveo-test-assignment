import InfiniteScroll from "@/components/InfiniteScroll.vue";
import { mount } from "@vue/test-utils";

describe("dogCard", () => {
  test("Emits 'loadMore' after scrolling down", async () => {
    const $store = {
      state: {
        count: 25
      },
      commit: jest.fn()
    };
    const wrapper = mount(InfiniteScroll, {
      global: {
        mocks: {
          $store
        }
      }
    });
    // document.documentElement.offsetHeight equals 0
    // they need to be equal in order for scroll event listener to work
    document.documentElement.scrollTop = 0;
    window.innerHeight = 0;
    console.log(document.documentElement.offsetHeight);
    window.dispatchEvent(new Event("scroll"));
    expect(wrapper.emitted()).toHaveProperty("loadMore");
  });
});
