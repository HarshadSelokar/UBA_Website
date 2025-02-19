document.addEventListener("DOMContentLoaded", () => {
  const content = {
    mps_one: {
      imgSrc: "img/2.png",
      designation: "Dr.Fr.Paul Chandrakunnel\nDirector, SVPCET",
      description:
        "'At SVPCET, we are proud to be a part of Unnat Bharat Abhiyan, driving sustainable development and empowering our rural partners. Our collective efforts are making a tangible difference in the lives of communities and fostering a deeper connection between education and social responsibility. This initiative not only enriches the lives of those we serve but also contributes significantly to the holistic development of our students'",
    },
    mps_two: {
      imgSrc: "img/1.png",
      designation: "Dr. Jane Smith\nAssistant Director, SVPCET",
      description:
        "'Unnat Bharat Abhiyan aligns perfectly with our institution's vision of creating a positive social impact. By engaging our students and faculty in rural development projects, we not only contribute to the community but also foster a sense of responsibility and empathy among our students. UBA provides students with practical learning opportunities outside the traditional classroom setting. This initiative has bridged the gap between academia and rural realities'",
    },
    mps_three: {
      imgSrc: "img/3.png",
      designation: "Fr. Siju Jose\nFinancial Administrator, SVPCET",
      description:
        "'Engaging with rural communities through UBA has led to a rich cultural exchange. Our students and faculty gain a deeper understanding of rural lifestyles, traditions, and challenges. This cultural immersion fosters empathy and broadens their perspectives For instance, organizing cultural events and festivals in the villages nas become a regular activity, strengthening the bond between the institution and the community'",
    },
    mps_four: {
      imgSrc: "img/4.png",
      designation: "R.B Gowardhan\nInstitute Mentor, SVPCET",
      description:
        "'Our institution leverages its resources and expertise to contribute to infrastructure development in rural areas through UBA. For example, our civil engineering department has undertaken projects to build robust road networks and irrigation systems, improving connectivity and agricultural productivity It's incredibly rewarding to see the tangible changes we've brought about together, making a real difference in people's lives.'",
    },
    mps_five: {
      imgSrc: "img/5.png",
      designation:
        "Dr. Surendra V. Gole\nFormer Principal, SVPCET(2018 - May 2024)",
      description:
        "'Our commitment to Unnat Bharat Abhiyan is unwavering as we strive to bridge the urban-rural divide through innovative solutions and community engagement. Together, we are shaping a brighter future for our rural communities. This program truly embodies the spirit of inclusive growth and development, paving the way for a brighter future for all. The collaborative efforts have not only improved local livelihoods but also instilled a sense of responsibility and empathy in the youth'",
    },
    mps_six: {
      imgSrc: "img/6.png",
      designation: "Dr. Vijay Wadhai\nPrincipal, SVPCET(May 2024, onwards",
      description:
        "'I am incredibly proud of our students who have actively participated in the UBA initiative. Their dedication to applying their academic knowledge to real-world challenges has made a significant impact on the rural communities we serve. Through UBA, our students have not only enhanced their technical and problem-solving skills but also developed a deep sense of social responsibility It empowers students and institutions to engage meaningfully with communities.'",
    },
  };

  const spans = document.querySelectorAll(".MP_Color span");
  let activeIndex = 0;
  let interval;

  function updateContent(index) {
    const keys = Object.keys(content);
    const key = keys[index];

    if (content[key]) {
      document.getElementById("mps_img").src = content[key].imgSrc;
      document.getElementById("mps_desinaton").innerText =
        content[key].designation;
      document.getElementById("mps_discription").innerText =
        content[key].description;

      spans.forEach((span, idx) => {
        if (idx === index) {
          span.style.backgroundColor = "#2c91d6";
          span.style.color = "white";
        } else {
          span.style.backgroundColor = "";
          span.style.color = "";
        }
      });
    }
  }

  spans.forEach((span, index) => {
    span.addEventListener("click", () => {
      clearInterval(interval);
      activeIndex = index;
      updateContent(activeIndex);
      startAutoLoop();
    });
  });

  function startAutoLoop() {
    interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % spans.length;
      updateContent(activeIndex);
    }, 3000);
  }

  updateContent(activeIndex);
  startAutoLoop();
});
