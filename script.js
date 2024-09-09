document.querySelectorAll('.button').forEach(button => {
    let interval;
  
    button.addEventListener('mousedown', function (e) {
      const createRipple = (e) => {
        const circle = document.createElement('span');
        const buttonStyles = window.getComputedStyle(this);
        
        button.classList.add('active');

        // Set the ripple's size and shape to match the button
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;
  
        circle.style.width = circle.style.height = `${diameter}px`;
  
        // Center the ripple in the button
        circle.style.left = `${this.clientWidth / 2 - radius}px`;
    
        // Apply the button's border-radius to match the button shape
        circle.style.borderRadius = buttonStyles.borderRadius;
        circle.style.backgroundColor = buttonStyles.backgroundColor; // Match the button's background color

        circle.classList.add('ripple');
  
        // Append the ripple to the button
        this.appendChild(circle);
  
        // Remove the ripple after the animation
        setTimeout(() => circle.remove(), 6000);
      };
  
      // Create the first ripple immediately
      createRipple(e);
  
      // Continuously create ripples while the mouse is pressed
      interval = setInterval(() => createRipple(e), 600);
  
      // Stop creating ripples when the mouse is released
      button.addEventListener('mouseup', function () {
        clearInterval(interval);
        button.classList.remove('active');
      });
  
      // Stop creating ripples when the mouse leaves the button
      button.addEventListener('mouseleave', function () {
        clearInterval(interval);
        button.classList.remove('active');
      });
    });
  });