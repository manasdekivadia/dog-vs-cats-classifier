let model;
async function loadModel() {
    model = await tf.loadLayersModel('model_js/model.json');
    console.log("Model Loaded!");
}
loadModel();

document.getElementById("imageUpload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function() {
        let img = document.getElementById("preview");
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
});

async function predictImage() {
    let img = document.getElementById("preview");
    let tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([64, 64])
        .toFloat()
        .expandDims();

    let prediction = await model.predict(tensor).data();
    let resultText = prediction[0] > 0.5 ? "Dog" : "Cat";
    document.getElementById("result").innerText = "Prediction: " + resultText;
}
