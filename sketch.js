let input, button;

function setup() {
  createCanvas(1024, 768);
  frameRate(3);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  textWrap(WORD);

  // Dimensions for "I AM :" box
  let boxX = 50;
  let boxY = 490;
  let boxW = 920;
  let boxH = 100;
  
  let inputWidth = 400;  // Width of the input box

  // Create input field
  input = createInput();
  input.size(inputWidth);
  input.style('font-size', '18px');
  input.style('padding', '6px');

  // Center the input horizontally inside the "I AM :" box
  input.position(boxX + (boxW - inputWidth), boxY + 50);

  // Create button
  button = createButton('Enter');
  button.style('font-size', '18px');
  button.mousePressed(submitResponse);

  // Place button right next to the input field
  button.position(input.x + input.width + 20, input.y);
}

function draw() {
  background(0); // Reset canvas each frame

  // Draw the text boxes with dynamic strokes and text inside
  drawBoxWithText(
    50, 50, 920, 150,
    "THE SELF DETERMINATION CHAMBER",
    32
  );

  drawBoxWithText(
    50, 250, 920, 100,
    "YOU ARE ENTERING A SPACE FREE OF CONSTRAINTS FOR MARGINALISED PEOPLE - BIPOC, DISABLED, DIVERSIFIED, GENDER DIVERSE, MINORITIES, QUEER, WOMEN.",
    16
  );

  drawBoxWithText(
    50, 370, 920, 100,
    "LEAVE YOUR BIASES BEHIND AND DISIDENTIFY YOURSELF.",
    18
  );

  drawBoxWithText(
    50, 490, 920, 100,
    "I AM :",
    24
  );

  drawBoxWithText(
    50, 610, 920, 50,
    "Press enter to discover yourself",
    16
  );

  drawBoxWithText(
    50, 680, 920, 50,
    "ENTER",
    20
  );
}

function drawBoxWithText(x, y, w, h, message, fontSize) {
  strokeWeight(12);
  stroke(22, random(25), random(255));
  fill(0);
  rect(x, y, w, h);

  noStroke();
  fill(255);
  textSize(fontSize);
  textAlign(LEFT, TOP);
  textWrap(WORD);

  // Estimate line height
  let lineHeight = fontSize * 1.2;
  let charsPerLine = Math.floor((w - 40) / (fontSize * 0.6));
  let lineCount = Math.ceil(message.length / charsPerLine);
  let totalTextHeight = lineHeight * lineCount;
  let textY = y + (h - totalTextHeight) / 2;

  text(message, x + 20, textY, w - 40);
}

function submitResponse() {
  // Get the text from the input field
  let userText = input.value().trim();
  if (userText) {
    // Redirect to result.html with the user input as a URL parameter
    window.location.href = `result.html?iam=${encodeURIComponent(userText)}`;
  }
}