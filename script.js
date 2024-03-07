var arr = [
  {
    dp: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1600184461328-c35f188ff4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1620510625142-b45cbb784397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9rZXJ8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1517249361621-f11084eb8e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGpva2VyfGVufDB8fDB8fHww",
  },
];
var clutter = " ";
arr.forEach(function (elem, index) {
  clutter += ` <div class="story">
    <img id="${index}" src="${elem.dp}" alt="" />
  </div>`;
});

document.querySelector("#storie").innerHTML = clutter;

document.querySelector("#storie").addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
  }, 5000);
});
