document.querySelector('.upload-button').addEventListener('click', function () {
    //image selection dialog
    var fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', function () {
        var selectedFile = fileInput.files[0];

        if (selectedFile) {
            var reader = new FileReader();

            reader.onload = function (event) {
                localStorage.setItem('uploadedImage', event.target.result);

                //open new tab for image editing, with the selected image
                var redirectUrl = 'A1_2.html';
                window.open(redirectUrl, '_blank');
            };

            reader.readAsDataURL(selectedFile);
        }
    });

    fileInput.click();
});
