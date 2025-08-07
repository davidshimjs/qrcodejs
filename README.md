<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recomendación de Medicamentos</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; }
    h1 { color: #008080; }
    label { display: block; margin-top: 15px; font-weight: bold; }
    select, input[type="text"], input[type="submit"] { width: 100%; padding: 8px; margin-top: 5px; }
    .result { margin-top: 20px; padding: 15px; background-color: #e0f7f1; border: 1px solid #ccc; display: none; }
  </style>
</head>
<body>
  <h1>¿Qué medicamento necesitas?</h1>
  <form id="medForm">
    <fieldset>
      <legend>Completa el formulario</legend>
      <label for="sintoma">¿Cuál es tu síntoma principal?</label>
      <select id="sintoma" required>
        <option value="">--Selecciona uno--</option>
        <option value="garganta">Dolor de garganta</option>
        <option value="cabeza">Dolor de cabeza</option>
        <option value="fiebre">Fiebre</option>
        <option value="estomacal">Dolor estomacal</option>
        <option value="alergia">Congestión / Alergia</option>
      </select>

      <label for="alergias">¿Eres alérgico/a a algún medicamento?</label>
      <input type="text" id="alergias" placeholder="Ej. ibuprofeno, amoxicilina...">

      <label for="condiciones">¿Tienes alguna condición médica?</label>
      <input type="text" id="condiciones" placeholder="Ej. presión alta, embarazo...">

      <input type="submit" value="Ver recomendación">
    </fieldset>
  </form>

  <div class="result" id="resultado"></div>

  <script>
    document.getElementById('medForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const sintoma = document.getElementById('sintoma').value;
      const alergias = document.getElementById('alergias').value.toLowerCase().trim();
      const condiciones = document.getElementById('condiciones').value.toLowerCase().trim();

      if (!sintoma) {
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerText = 'Por favor selecciona un síntoma válido.';
        return;
      }

      const recomendaciones = {
        garganta: "✔️ Pastillas con benzocaína (ej. Cepacol) o spray de lidocaína.\n✔️ Gárgaras con sal y agua tibia.",
        cabeza: alergias.includes("ibuprofeno")
          ? "✔️ Acetaminofén (Tylenol), evita ibuprofeno por tu alergia."
          : "✔️ Ibuprofeno o acetaminofén según preferencia y tolerancia.",
        fiebre: "✔️ Acetaminofén cada 4-6 horas según necesidad. Hidrátate bien.",
        estomacal: "✔️ Antiespasmódicos (ej. butilhioscina) o antiácidos si hay agruras.",
        alergia: alergias.includes("loratadina")
          ? "✔️ Evita loratadina. Puedes usar cetirizina o fexofenadina."
          : "✔️ Antihistamínicos como loratadina o cetirizina. Spray nasal si hay congestión."
      };

      const recomendacion = recomendaciones[sintoma] || "No se encontró una recomendación para ese síntoma.";

      document.getElementById('resultado').style.display = 'block';
      document.getElementById('resultado').innerText = recomendacion;
    });
  </script>
</body>
</html>
		
