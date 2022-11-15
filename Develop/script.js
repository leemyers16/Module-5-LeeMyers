// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $(function () {
    // variable to show tday of week on top of page
    let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
  
    // variable fot button
    let saveBtn = $('.saveBtn');
  
    // click function on button 
    saveBtn.on('click', function () {
      $(this).siblings('.description').get(0).value;
      let calenderText = $(this).siblings('.description').get(0).value;
      localStorage.setItem($(this).parent().attr('id'), calenderText);
    });
  
    // array of hours of the work day
    let hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16];
  
    for (i = 0; i < hoursOfDay.length; i++) {
      let eventStorage = localStorage.getItem('hour-' + hoursOfDay[i]);
      let hourTextArea = $('#hour-' + hoursOfDay[i] + ' > .description');
      hourTextArea.textContent = eventStorage;
    }
  
    // variable of current hour to be able to add past present and future class
    let currentHour = dayjs().hour();
  
    // for loop to add past present and future class to days of week
    for (var i = 0; i < hoursOfDay.length; i ++) {
      if (hoursOfDay[i] < currentHour) {
        $('#hour-' + hoursOfDay[i]).addClass('past');
      } else if (hoursOfDay[i] == currentHour) {
        $('#hour-' + hoursOfDay[i]).removeClass('past');
        $('#hour-' + hoursOfDay[i]).addClass('present');
      } else {
        $('#hour-' + hoursOfDay[i]).removeClass('past');
        $('#hour-' + hoursOfDay[i]).removeClass('present');
        $('#hour-' + hoursOfDay[i]).addClass('future');
      }
    }
  });