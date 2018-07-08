// Получаем массив всех кнопок с атрибутом [data-tools = dialog]
var dialogs = $('button[data-tools="dialog"]');

// Перебираем в цикле каждый элемент
$.each(dialogs, function(i) {
  var dialog = $(dialogs[i]);

  // Извлекаем ID вызываемого диалогового окна [data-target = ID]
  var target = $(dialog.data('target'));

  // Обрабатываем событие нажатие кнопки
  dialog.on("click", function(even) {
    // Отображаем окно ([0] здесь применяется для вызова нативного метода show)
    target[0].showModal();
  });
  
  // Обрабатываем нажатие кнопки закрытия
  target.find('button[data-action="modal-close"]').on("click", function(even) {
    // Закрываем окно ([0] здесь применяется для вызова нативного метода close)
    target[0].close();
  });
});