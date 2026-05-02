/**
 * Función principal que sirve el archivo HTML al acceder a la URL de la Web App.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('portalFuncionario')
      .evaluate()
      .setTitle('Portal del Funcionario')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Función auxiliar por si necesitas incluir archivos CSS o JS externos
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
