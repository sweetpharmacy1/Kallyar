// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById('completeTheLook').classList;

// returns current scroll position
var scrollTop = function() {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

function upAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}

window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});



////////////////////

const navbar = document.querySelector(".navbar");
const completeTheLook = document.querySelector(".nav-container");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Handle .navbar with a 60px scroll threshold
  if (currentScroll > 100) {
    if (currentScroll > lastScroll) {
      navbar.classList.add("scroll-down");
      navbar.classList.remove("scroll-up");
    } else {
      navbar.classList.add("scroll-up");
      navbar.classList.remove("scroll-down");
    }
  } else {
    navbar.classList.remove("scroll-up", "scroll-down");
  }

  // Handle .completeTheLook with a 40px scroll threshold
  if (currentScroll > 40) {
    if (currentScroll > lastScroll) {
      completeTheLook.classList.add("scroll-down");
      completeTheLook.classList.remove("scroll-up");
    } else {
      completeTheLook.classList.add("scroll-up");
      completeTheLook.classList.remove("scroll-down");
    }
  } else {
    completeTheLook.classList.remove("scroll-up", "scroll-down");
  }

  lastScroll = currentScroll;
});








///////////////////////// animated banner icons
const boxes = document.querySelectorAll('.b-animated-icon');

// Calculate the total duration of the animation cycle
const totalDuration = 6.5; // 4.5s + 1s for the last appear

function restartAnimation() {
    boxes.forEach(box => {
        box.style.animation = 'none'; // Reset the animation
        box.offsetHeight; // Trigger a reflow
        box.style.animation = ''; // Restart the animation
    });
}

// Set an interval to restart the animation after the total duration
setInterval(restartAnimation, totalDuration * 1000);









/////////////////////////////////// back to top button
const backToTopButton = document.getElementById('backToTop');

// Smooth scroll back to top
backToTopButton.onclick = function() {
    const duration = 1000; // Duration in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start * (1 - progress));

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
};







//////////////////////////////////////////// close and open favorite - notification - cart side bar box

function toggleBox(selector) {
  const hidden_box = document.querySelector(selector);
  
  if (hidden_box.classList.contains('active')) {
    hidden_box.classList.add('closing');
    setTimeout(() => {
      hidden_box.classList.remove('active', 'closing');
      hidden_box.style.display = 'none';
    }, 300);
  } else {
    document.querySelectorAll('.hidden_box').forEach(b => {
      if (b.classList.contains('active')) {
        b.classList.add('closing');
        setTimeout(() => {
          b.classList.remove('active', 'closing');
          b.style.display = 'none';
        }, 300);
      }
    });

    hidden_box.style.display = 'flex';
    setTimeout(() => {
      hidden_box.classList.add('active');
    }, 10);
  }
}

// Close when clicking outside or on the close button
document.addEventListener('click', function (event) {
  document.querySelectorAll('.hidden_box').forEach(box => {
    const content = box.querySelector('.closeclickable');

    if (box.classList.contains('active') && 
        (!content.contains(event.target) || event.target.classList.contains('close-btn'))) {
      box.classList.add('closing');
      setTimeout(() => {
        box.classList.remove('active', 'closing');
        box.style.display = 'none';
      }, 300);
    }
  });
});
















const spans = document.querySelectorAll('.kallyar-text span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});