$(function () {
    var image_path = null;

    //add crop details here
    p_cropname = "Pepperbell";
    p_diseases = ["Bacterial Leaf spot", "Cercospora Leaf spot", "Alternaria Leaf spot"];
    p_treatments = ["Hot water seed treatment", "Use a Boom sprayer to apply copper"];

    $('#img_file').change(function (event) {
        image_path = URL.createObjectURL(event.target.files[0]);
    });
    $('#submit_img').click(function() {
        if(image_path === null) {
            alert('No image uploaded!');
        }
        else {
            $('#disp').fadeIn("fast").attr('src', image_path);
            $('#inp_img_form').hide();

            //variables
            $('#crop_name').append(p_cropname);
            for (disease in p_diseases) {
                $('#disease').append(p_diseases[disease]);
                if (disease < p_diseases.length - 1)
                    $('#disease').append(', ');
            }
            for (treatment in p_treatments) {
                $('#treatment').append(p_treatments[treatment]);
                if (treatment < p_treatments.length - 1)
                    $('#treatment').append(', ');
            }
            $('#details').fadeIn("fast");
            $('#try_again').html(`<button onclick="window.location.href = 'index.html';" class="button">Try another leaf?</button>`);
        }
    });
});