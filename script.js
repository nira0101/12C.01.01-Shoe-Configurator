"use stric";
window.addEventListener("DOMContentLoaded", init);
let elemtoPaint;

async function init() {
  let response = await fetch("./shoe2-01.svg");
  let mySvgData = await response.text();
  console.log(mySvgData);
  document.querySelector(".container").innerHTML = mySvgData;
  startManipulatingTheSvg();
}
function startManipulatingTheSvg() {
  document.querySelectorAll(".g_to_interact_with").forEach((eachG) => {
    console.log(eachG);

    eachG.addEventListener("click", theClick);
    eachG.addEventListener("mouseover", theMouseover);
    eachG.addEventListener("mouseout", theMouseout);
  });

  document.querySelectorAll(".color_btn").forEach((each_btn) => {
    each_btn.addEventListener("click", colorClick);
  });
}

function theClick() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function theMouseover() {
  console.log(this);
  this.style.stroke = "blue";
}

function theMouseout() {
  console.log(this);
  this.style.stroke = "none";
}

function colorClick() {
  console.log("KLIK", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
