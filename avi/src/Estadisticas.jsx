
export default function Estadisticas() {
  return (
    <div>
      <h1 id="tituloestadisticas">Estadísticas de Tests</h1>

    <div id="stats-cards" class="cards">
      <div class="card">
        <div class="card-number">45</div>
        <div class="label-small">Tests Realizados</div>
        <div class="label-title">Hoy</div>
      </div>

      <div class="card">
        <div class="card-number" >1240</div>
        <div class="label-small">Tests Realizados</div>
        <div class="label-title">Este Mes</div>
      </div>

      <div class="card">
        <div class="card-number" >8956</div>
        <div class="label-small">Tests Realizados</div>
        <div class="label-title">Total</div>
      </div>
    </div>

    <h1 id="tituloestadisticas">Programas Más Recomendados</h1>

    <div id="recommended-programs" class="program-section">

      <div class="program-list">
        <div class="program-item">
          <div class="percent">35%</div>
          <div>Programa A</div>
        </div>

        <div class="program-item">
          <div class="percent">25%</div>
          <div>Programa B</div>
        </div>

        <div class="program-item">
          <div class="percent">20%</div>
          <div>Programa C</div>
        </div>

        <div class="program-item">
          <div class="percent">20%</div>
          <div>Programa D</div>
        </div>
      </div>
    </div>
  </div>
  );
}