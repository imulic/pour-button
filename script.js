document.querySelectorAll('.button').forEach(button => {
  let interval;

  // Function to create a ripple
  const createRipple = (e) => {
    const circle = document.createElement('span');
    const buttonStyles = window.getComputedStyle(button);

    // Set the ripple's size and shape to match the button
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    // Center the ripple in the button
    circle.style.left = `${button.clientWidth / 2 - radius}px`;

    // Apply the button's border-radius to match the button shape
    circle.style.borderRadius = buttonStyles.borderRadius;
    circle.style.backgroundColor = buttonStyles.backgroundColor;

    circle.classList.add('ripple');
    button.appendChild(circle);

    // Remove the ripple after animation completes
    setTimeout(() => circle.remove(), 2000);
  };

  // Event handler to trigger ripple and button press down
  const onPressStart = (e) => {
    button.classList.add('active');  // Move the button down by adding 'active' class

    // Start ripple creation
    createRipple(e);

    // Continuously create ripples while the button is pressed
    interval = setInterval(() => createRipple(e), 500); // Repeat ripples every 500ms
  };

  // Event handler to stop ripple and reset button position
  const onPressEnd = () => {
    clearInterval(interval);  // Stop creating ripples
    button.classList.remove('active');  // Move the button back to original position
  };

  // Attach events for both desktop (mouse) and mobile (touch)
  button.addEventListener('mousedown', onPressStart);
  button.addEventListener('mouseup', onPressEnd);
  button.addEventListener('mouseleave', onPressEnd);  // Handle when mouse leaves button

  // Mobile events
  button.addEventListener('touchstart', onPressStart);
  button.addEventListener('touchend', onPressEnd);
  button.addEventListener('touchcancel', onPressEnd);  // Handle touch cancellation
});