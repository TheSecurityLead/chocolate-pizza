document.addEventListener('DOMContentLoaded', function() {
    // Select all checkboxes within the ingredients list
    var checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');

    // Function to toggle the 'checked' class
    function toggleCheck() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    }

    // Add the toggleCheck function as an event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', toggleCheck);
    });
});
