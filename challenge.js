let counter = document.getElementById("counter");
	let num = parseInt(counter.innerText);
	let minus = document.getElementById("-");
	let plus = document.getElementById("+");
	let heart = document.getElementById("<3");
	let pause = document.getElementById("pause");
	let comment = document.getElementById('comment-form');

	let is_paused = false;

	let timer = setInterval(() => {
	  if (!is_paused) {
	    counter.innerText = ++num;
	  }
	}, 1000)

	minus.addEventListener('click', () => {
	  counter.innerText = --num;
	})

	plus.addEventListener('click', () => {
	  counter.innerText = ++num;
	})

	let current;
	let count;
	heart.addEventListener('click', () => {
	  let like = document.querySelector(".likes")
	  like.dataset.num = num;

	  if(current === num){
	      let lastChild = like.children[like.children.length -1];
	      count++;
	      lastChild.innerText = `${num} has been liked ${count} times`;
	    }
	    else {
	      let li = document.createElement('li');
	      count = 1;
	      li.innerText = `${num} has been liked ${count} time`;
	      like.appendChild(li);
	      current = num;
	    }
	})

	pause.addEventListener('click', () => {
	  is_paused = !is_paused;
	  pause.innerText = is_paused ? "resume" : "pause";
	  minus.disabled = is_paused;
	  plus.disabled = is_paused;
	  heart.disabled = is_paused;
	})

	comment.addEventListener("submit", (e) => {
	  e.preventDefault();
	  let input = document.querySelector('input');
	  let div = document.querySelector('#list');
	  let p = document.createElement('p');
	  p.innerText = input.value;
	  input.value = "";
	  div.appendChild(p);

	})
