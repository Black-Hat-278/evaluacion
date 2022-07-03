$(document).ready(function (){
    listar();
});
function listar(){
   $.ajax({
        url: "/persona/all",
        type: 'GET',
        success: function (x) {
            $("#table tbody tr").remove();
            x.forEach((item,index,array)=>{
                $("#table").append(
                        "<tr>\n\
                            <td>" + (index + 1) + "</td>\n\
                            <td>" + item.persCodigo+"</td>\n\
                            <td>" + item.persDni+"</td>\n\
                            <td>" + item.persAp_paterno+"</td>\n\
                            <td>" + item.persAp_materno+"</td>\n\
                            <td>" + item.persNombres+"</td>\n\
                            <td>" + item.persTelefono+"</td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='editar("+ item.persId + ")'><i class='fa-solid fa-pen-to-square yelow'></i></a>\n\
                            </td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='eliminar(" + item.persId + ")'><i class='fa-solid fa-trash-can red'></i></a>\n\
                            </td>\n\
                        </tr>");
                
            });
    }
   }); 
}
function editar(id) {
    $.ajax({
        url: "/persona/" + id,
        type: 'GET',
        success: function (w) {
            $("#edit_persId").val(w.persId),
            $("#edit_codigo").val(w.persCodigo),
            $("#edit_dni").val(w.persDni),
            $("#edit_ap_paterno").val(w.persAp_paterno),
            $("#edit_ap_materno").val(w.persAp_materno),
            $("#edit_nombres").val(w.persNombres),
            $("#edit_Telefono").val(w.persTelefono)
        }
    });
    $("#editarModal").modal('show');
}
function eliminar(id) {
    bootbox.confirm({
        message: "Realmente desea Eliminar?",
        buttons: {
            confirm: {
                label: 'SI',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    url: "/persona/" + id,
                    type: 'DELETE',
                    success: function (w) {
                        bootbox.alert({
                            message: "Registro eliminado correctamente...!",
                            callback: function () {
                                console.log('This was logged in the callback!');
                            }
                        });
                        listar();
                    }
                });
            } else {
                bootbox.alert({
                    message: "Registro no eliminado!",
                    size: 'small'
                });
            }
        }
    });
}
$("#guardar").click(function () {
    $.ajax({
        url: "/persona/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({'nombres': nombre, 'apellidos': apellido, 'estado':true}),
        data: JSON.stringify({
            persCodigo: $("#codigo").val(), 
            persDni: $("#dni").val(), 
            persAp_paterno: $("#ap_paterno").val(),
            persAp_materno: $("#ap_materno").val(),
            persNombres: $("#nombres").val(),
            persTelefono: $("#telefono").val(), 
            persEstado:true
        }),
        cache: false,
        success: function (w) {
            bootbox.alert({
                message: "Registro guardado correctamente...!",
                callback: function () {
                    console.log('This was logged in the callback!');
                }
            });
            /*bootbox.dialog({
                message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Registro guardado correctamente</p>',
                closeButton: false,
            });*/
            // do something in the background
            // dialog.modal('hide');
            limpiar();
            listar();
        }
    });
    $("#exampleModal").modal('hide');
});
function limpiar() {
    $("#codigo").val(); 
     $("#dni").val(); 
      $("#ap_paterno").val(); 
       $("#ap_materno").val(); 
        $("#nombres").val(); 
           $("#telefono").val();
        }

$("#modificar").click(function () {
    var codigo = $("#editar_codigo").val();
    var dni = $("#editar_dni").val();
    var ap_paterno = $("#editar_ap_paterno").val();
    var ap_materno = $("#editar_ap_materno").val();
    var nombres = $("#editar_nombres").val();
    var telefono = $("#editar_telefono").val();
    var id = $("#editar_id").val();
    bootbox.confirm({
        message: "Realmente desea Modificar?",
        buttons: {
            confirm: {
                label: 'SI',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    url: "/persona/update",
                    type: 'PUT',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        persId: $("#edit_persId").val(),
                        persCodigo: $("#edit_codigo").val(), 
                        persDni: $("#edit_dni").val(), 
                        persAp_paterno: $("#edit_ap_paterno").val(), 
                        persAp_materno: $("#edit_ap_materno").val(), 
                        persNombres: $("#edit_nombres").val(), 
                        persTelefono: $("#edit_telefono").val()
                    }),
                    // data: JSON.stringify({'id': id, 'nombres': nombres, 'apellidos': apellidos}),
                    cache: false,
                    success: function (w) {
                        bootbox.alert({
                            message: "Registro Modificado correctamente...!",
                            /*callback: function () {
                                console.log('This was logged in the callback!');
                            }*/
                        });
                        limpiar();
                        listar();
                    }
                });
                $("#editarModal").modal('hide');
            } else {
                bootbox.alert({
                    message: "Registro no Modificado!",
                    size: 'small'
                });
            }
        }
    });
});
