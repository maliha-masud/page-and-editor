function clearInputValue(input) {
        input.value = '';
}

//image display
var imageDataUrl = localStorage.getItem('uploadedImage');
if (imageDataUrl) {
    document.getElementById('uploaded-image').src = imageDataUrl;
} else {
    alert('No uploaded image found.');
}

//check if there's already an uploaded image
window.addEventListener('load', function () {
    var imageDataUrl = localStorage.getItem('uploadedImage');
    if (imageDataUrl) {
        document.getElementById('uploaded-image').src = imageDataUrl;
    }
});

//browse button functionality - upload image
document.querySelector('.browse-button').addEventListener('click', function () {
    //image selection dialog
    var fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', function () {
        var selectedFile = fileInput.files[0];

        if (selectedFile) {
            var reader = new FileReader();

            reader.onload = function (event) {
                var imageDataUrl = event.target.result;
                document.getElementById('uploaded-image').src = imageDataUrl;

                localStorage.setItem('uploadedImage', imageDataUrl);
            };

            reader.readAsDataURL(selectedFile);
        }
    });

    fileInput.click();
});

//*********************************************************************\\

var dispImg = document.getElementById('uploaded-image');
var imgURL = localStorage.getItem('uploadedImage');

function updateImage() {
    dispImg.src = imgURL;
    localStorage.setItem('uploadedImage', imgURL);
}

function applyFilter(filter) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.filter = filter;
        context.drawImage(img, 0, 0, img.width, img.height);
        imgURL = canvas.toDataURL();
        updateImage();
    };
    img.src = imgURL;
}

					/********** filter controls ***********/

//brightness - decrease
document.getElementById('dec-brightness').addEventListener('click', function () {
    var brightnessValue = 0.8;
    applyFilter('brightness(' + brightnessValue + ')');
});
//brightness - increase
document.getElementById('inc-brightness').addEventListener('click', function () {
    var brightnessValue = 1.2;
    applyFilter('brightness(' + brightnessValue + ')');
});

//contrast - decrease
document.getElementById('dec-contrast').addEventListener('click', function () {
    var contrastValue = 0.8;
    applyFilter('contrast(' + contrastValue + ')');
});
//contrast - increase
document.getElementById('inc-contrast').addEventListener('click', function () {
    var contrastValue = 1.2;
    applyFilter('contrast(' + contrastValue + ')');
});

//saturation - decrease
document.getElementById('dec-saturation').addEventListener('click', function () {
    var saturationValue = 0.8;
    applyFilter('saturate(' + saturationValue + ')');
});
//saturation - increase
document.getElementById('inc-saturation').addEventListener('click', function () {
    var saturationValue = 1.2;
    applyFilter('saturate(' + saturationValue + ')');
});

//vibrance - decrease
document.getElementById('dec-vibrance').addEventListener('click', function () {
    var vibranceValue = -20;
    applyFilter('hue-rotate(' + vibranceValue + 'deg)');
});
//vibrance - increase
document.getElementById('inc-vibrance').addEventListener('click', function () {
    var vibranceValue = 20;
    applyFilter('hue-rotate(' + vibranceValue + 'deg)');
});

				/********** buttons section ***********/

document.getElementById('blur-btn').addEventListener('click', function () {
    applyFilter('blur(4px)');
});

document.getElementById('crop-btn').addEventListener('click', function () {
});

rot_Angle=0;
document.getElementById('rotate-btn').addEventListener('click', function () {
    rot_Angle += 90;
    dispImg.style.transform = 'rotate(' + rot_Angle + 'deg)';
});

document.getElementById('scale-btn').addEventListener('click', function () {
    // var canvas = document.createElement('canvas');
    // var context = canvas.getContext('2d');

    // canvas.width = dispImg.width * 0.7;
    // canvas.height = dispImg.height * 0.7;

    // context.drawImage(dispImg, 0, 0, canvas.width, canvas.height);

    // dispImg.src = canvas.toDataURL('image/jpeg');
});

				/********** action buttons ***********/

document.getElementById('rmv').addEventListener('click', function () {
    if (imageDataUrl) {
		document.getElementById('uploaded-image').src = imageDataUrl;
	}
});

document.getElementById('dl').addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = imgURL;
    a.download = 'image.png';
    a.click();
});