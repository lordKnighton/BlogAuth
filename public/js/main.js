$(document).ready(function() {
  $('.delete-blog').on('click', function() {
    var id = $(this).data('id')
    var url = '/delete/'+id;
    if(confirm('Delete Blog?')) {
      $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result) {
          console.log('Deleting Blog..')
          window.location.href='/';
        },
        error: function(err) {
          console.log(err)
        }
      })
    }
  })

  $('.edit-blog').on('click', function() {
    $('#edit-form-name').val($(this).data('name'))
    $('#edit-form-bloginputs').val($(this).data('bloginputs'))
    $('#edit-form-date').val($(this).data('date'))
    $('#edit-form-id').val($(this).data('id'))
  })
})
