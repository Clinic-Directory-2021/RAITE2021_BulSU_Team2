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

    formData.append('rank', $('#rank').find(":selected").val());
    formData.append('csrfmiddlewaretoken', $("input[name='csrfmiddlewaretoken']").val());
    event.preventDefault();
  console.log("1");

    $.ajax({
        type: "POST",
        url: '/add_crews_firebase/',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (data) {
            if(data == 'Success'){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Crew Successfully',
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'This Position is Occupied',
                  })
            }
        },
        error: function(data){
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                })
        },

      });

  }); 

function toEditCrew(crew_id_clicked, age, gender, bdate ,rank, fName, Lname, Mname , img_url){

    $('#editPreview').attr('src', img_url);

    $('#editFname').val(fName);
    $('#editGender').val(gender);
    $('#editMname').val(Mname);

    $('#editAge').val(age);

    $('#editLname').val(Lname);

    $('#editBirthdate').val(bdate);
    


}

$("#editCrewForm").submit(function( event ) {
    var formData = new FormData();

    var files = $('#editCrewImage')[0].files[0];

    formData.append('crewImage', files);
    formData.append('fileName', files.name);
    formData.append('firstName', $('#editFname').val());
    formData.append('gender', $('#editGender').val());
    formData.append('middleName', $('#editMname').val());

    formData.append('age', $('#editAge').val());
    formData.append('lastName', $('#editLname').val());
    formData.append('birthdate', $('#editBirthdate').val());

    formData.append('rank', $('#editRank').find(":selected").val());
    formData.append('csrfmiddlewaretoken', $("input[name='csrfmiddlewaretoken']").val());
    event.preventDefault();
  console.log("1");

    $.ajax({
        type: "POST",
        url: '/editCrewPage/',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (data) {
            if(data == 'Success'){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Crew Successfully',
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'This Position is Occupied',
                  })
            }
        },
        error: function(data){
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                })
        },

      });

  }); 

  $("#addShipForm").submit(function( event ) {
    var formData = new FormData();

    var files = $('#shipImage')[0].files[0];

    formData.append('shipImage', files);
    formData.append('fileName', files.name);
    formData.append('shipName', $('#ship_name').val());
    formData.append('ship_speed', $('#ship_speed').val());
    formData.append('ship_destination', $('#ship_destination').val());
    formData.append('csrfmiddlewaretoken', $("input[name='csrfmiddlewaretoken']").val());
    event.preventDefault();
  console.log("1");

    $.ajax({
        type: "POST",
        url: '/addShipFireBase/',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (data) {
            if(data == 'Success'){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Crew Successfully',
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'This Position is Occupied',
                  })
            }
        },
        error: function(data){
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                })
        },

      });

  }); 


  $(function(){
    $('#shipImage').change(function(){
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0]&& (ext == "png" || ext == "jpeg" || ext == "jpg")) 
       {
          var reader = new FileReader();

          reader.onload = function (e) {
             $('#previewShip').attr('src', e.target.result);
          }
         reader.readAsDataURL(input.files[0]);
      }else
      {
        $('#previewShip').attr('src', '../static/images/map.jpg');
      }
      
       });

     });


function toAddCrew(){
    window.location.href = '/add_crew/';
}
function toEditShip(){
    window.location.href = '/edit_ship/';
}
function toAddShip(){
    window.location.href = '/add_ship/';
}

