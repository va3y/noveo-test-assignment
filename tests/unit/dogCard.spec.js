import { mount } from "@vue/test-utils";
import DogCard from "@/components/DogCard/DogCard.vue";

describe("DogCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(DogCard);
  });

  it("Has an img tag", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("Has a LikeIcon component", () => {
    const likeIcon = wrapper.findComponent({ name: "LikeIcon" });
    expect(likeIcon.exists()).toBe(true);
  });
});
