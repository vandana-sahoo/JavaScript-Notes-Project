var arr = [
  {
    dp: "https://th.bing.com/th/id/OIP.wUwGw9P6XBSFQnjKtkYvWQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    story:
      "https://i.pinimg.com/236x/43/0b/e3/430be302bcde306dcd5ca86729a2a6bf.jpg",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.1KGI6u1rij9K7zZ2ObLkcwHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    story: "http://ts3.mm.bing.net/th?id=OIP.h6OV2vcKLCDjGenCJzLiwAHaE7&pid=15.1",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.3LlaEIzdbwaGIxvwzhZFKwHaKe?w=186&h=263&c=7&r=0&o=5&pid=1.7",
    story: "https://th.bing.com/th/id/OIP.4m8mqaXfVQ5nybfmzrfwrgHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.QvYU7M51Yuak-xuAU7XqQQHaLH?w=189&h=284&c=7&r=0&o=5&pid=1.7",
    story: "https://th.bing.com/th/id/OIP.JYcOyY7i_9ZUT4cqwsGK_wHaLH?w=191&h=286&c=7&r=0&o=5&pid=1.7",
  },
];

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function (elem,idx) {
   clutter += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
});
stories.innerHTML = clutter

stories.addEventListener("click",function(dets){
    // when i click any story screen should be block(hold) full width
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none"
}, 3000);

})