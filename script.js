document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const cursorFollower = document.createElement('div');
  cursorFollower.classList.add('cursor-follower');
  document.body.appendChild(cursorFollower);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });


  // Header hide/show on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          header.style.top = '-80px';
      } else {
          header.style.top = '0';
      }
      lastScrollTop = scrollTop;
  });

  // Burger menu toggle
  burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('toggle');
  });

  // Cursor follower
  document.addEventListener('mousemove', (e) => {
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
  });

  // Change cursor follower size on hover
  const elementsWithLargeCursor = document.querySelectorAll('a, button, .project-item');
  elementsWithLargeCursor.forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursorFollower.classList.add('large');
      });
      element.addEventListener('mouseleave', () => {
          cursorFollower.classList.remove('large');
      });
  });

  // Animate skill cards on scroll
  const skillCards = document.querySelectorAll('.skill-card');
  const observerOptions = {
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  skillCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
  });
});

// const spans = document.querySelectorAll('.word span');

// spans.forEach((span, idx) => {
//   span.addEventListener('click', (e) => {
//     e.target.classList.add('active');
//   });
//   span.addEventListener('animationend', (e) => {
//     e.target.classList.remove('active');
//   });
  
//   // Initial animation
//   setTimeout(() => {
//     span.classList.add('active');
//   }, 750 * (idx+1))
// });


consoleText(['Hello World', 'I am Kaval', 'UI/UX Designer','Fullstack Devloper'], 'text',['lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");
  
        // Get the filter value
        const filterValue = button.getAttribute("data-filter");
  
        // Show/Hide projects based on filter
        projects.forEach(project => {
          if (filterValue === "all" || project.classList.contains(filterValue)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
  
  const animateOnScroll = (elements) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 1 });

    elements.forEach(el => observer.observe(el));
};

animateOnScroll(document.querySelectorAll('.skill-card'));
animateOnScroll(document.querySelectorAll('.project-item'));

