$(document).ready(function (){
    listar();
});
function listar(){
   $.ajax({
        url: "/programa/all",
        type: 'GET',
        success: function (x) {
            $("#table tbody tr").remove();
            x.forEach((item,index,array)=>{
                $("#table").append(
                        "<tr>\n\
                            <td>" + (index + 1) + "</td>\n\
                            <td>" + item.progNombre+"</td>\n\
                            <td>" + item.progDescripcion+"</td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='editar("+ item.progId + ")'><i class='fa-solid fa-pen-to-square yelow'></i></a>\n\
                            </td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='eliminar(" + item.progId + ")'><i class='fa-solid fa-trash-can red'></i></a>\n\
                            </td>\n\
                        </tr>");
                
            });
    }
   }); 
}
function editar(id) {
    $.ajax({
        url: "/programa/" + id,
        type: 'GET',
        success: function (w) {
            $("#edit_progId").val(w.progId),
            $("#edit_nombre").val(w.progNombre),
            $("#edit_descripcion").val(w.progDescripcion)
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
                    url: "/programa/" + id,
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
        url: "/programa/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({'nombres': nombre, 'apellidos': apellido, 'estado':true}),
        data: JSON.stringify({
            progNombre: $("#nombre").val(), 
            progDescripcion: $("#descripcion").val(), 
            progEstado:true
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
    $("#nombre").val(); 
    $("#descripcion").val();
}

$("#modificar").click(function () {
    var nombre = $("#editar_nombre").val();
    var descripcion = $("#editar_descripcion").val();
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
                    url: "/programa/update",
                    type: 'PUT',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        progId: $("#edit_progId").val(),
                        progNombre: $("#edit_nombre").val(), 
                        progDescripcion: $("#edit_descripcion").val()
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
