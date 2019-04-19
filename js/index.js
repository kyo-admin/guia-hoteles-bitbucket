    $(function(){
        $("[data-toggle='tooltip']").tooltip();
        $('[data-toggle="popover"]').popover();
        $('.carousel').carousel({
           interval: 1500
         });

        $('#exampleModal').on('show.bs.modal', function (e){
            console.log('el modal RESERVA "MODAL" se está mostrando');

            $('#contactoBtn').removeClass('btn-success');
            $('#contactoBtn').addClass('btn-warning');
            $('#contactoBtn').prop('disabled', true);

        });
        $('#exampleModal').on('shown.bs.modal', function (e){
            console.log('el modal RESERVA "MODAL" se mostró');
        });
        $('#exampleModal').on('hide.bs.modal', function (e){
            console.log('el modal RESERVA "MODAL" se está ocultando');
        });
        $('#exampleModal').on('hidden.bs.modal', function (e){
            console.log('el modal RESERVA "MODAL" se ocultó');
            $('#contactoBtn').removeClass('btn-warning');
            $('#contactoBtn').addClass('btn-success');
            $('#contactoBtn').prop('disabled', false);
        });
    });