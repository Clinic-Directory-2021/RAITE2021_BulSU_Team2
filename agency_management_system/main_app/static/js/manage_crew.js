$(function(){
    $('#crew_image').change(function(){
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0]&& (ext == "png" || ext == "jpeg" || ext == "jpg")) 
       {
          var reader = new FileReader();

          reader.onload = function (e) {
             $('#preview_image').attr('src', e.target.result);
          }
         reader.readAsDataURL(input.files[0]);
      }else
      {
        $('#preview_image').attr('src', '../static/images/map.jpg');
      }
      
       });

     });

$("#addCrewForm").submit(function( event ) {
    var formData = new FormData();

    var files = $('#crew_image')[0].files[0];

    formData.append('crewImage', files);
    formData.append('fileName', files.name);
    formData.append('firstName', $('#firstName').val());
    formData.append('gender', $('#gender').val());
    formData.append('middleName', $('#middleName').val());

    formData.append('age', $('#age').val());
    formData.append('lastName', $('#lastName').val());
    formData.append('birthdate', $('#birthdate').val());

    $.ajax({
        url: '//',
        data: formData,
        enctype: 'multipart/form-data',
        success: function (data) {

        },

      });

  }); 

function toEditCrew(){
    window.location.href = '/edit_crew/';
}
function toAddCrew(){
    window.location.href = '/add_crew/';
}
function toEditShip(){
    window.location.href = '/edit_ship/';
}
function toAddShip(){
    window.location.href = '/add_ship/';
}

