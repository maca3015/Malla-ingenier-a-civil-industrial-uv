// Datos completos según tus 11 semestres y ramos con prerrequisitos

const ramosPorSemestre = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Fundamentos de Matemática", id: "fund_mat", prer: [] },
      { nombre: "Desarrollo Personal", id: "des_per", prer: [] },
      { nombre: "Desafíos de Ingeniería", id: "des_ing", prer: [] },
      { nombre: "Fundamentos de Programación", id: "fund_prog", prer: [] },
      { nombre: "Química para Ingeniería", id: "quim_ing", prer: [] }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Fundamentos de Física", id: "fund_fis", prer: [] },
      { nombre: "Cálculo Diferencial", id: "calc_diff", prer: ["fund_mat"] },
      { nombre: "Álgebra", id: "algebra", prer: ["fund_mat"] },
      { nombre: "Ingeniería Innovación y Emprendimiento", id: "ingen_emi", prer: ["des_ing"] },
      { nombre: "Programación", id: "programacion", prer: ["fund_prog"] }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Cálculo Integral y Series", id: "calc_int", prer: ["calc_diff"] },
      { nombre: "Álgebra Lineal", id: "algebra_lin", prer: ["algebra"] },
      { nombre: "Física Mecánica", id: "fis_mec", prer: ["fund_fis", "calc_diff"] },
      { nombre: "Tópicos Formación General Ingeniería Industrial", id: "top_form", prer: ["des_per", "ingen_emi"] },
      { nombre: "Alfabetización Académica para Ingeniería 1", id: "alf_acad_1", prer: ["des_per"] },
      { nombre: "TIPE Sello UV 1", id: "tipe_uv1", prer: ["ingen_emi"] },
      { nombre: "Idioma 1", id: "idioma1", prer: [] }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Cálculo en Varias Variables", id: "calc_var", prer: ["calc_int", "algebra_lin"] },
      { nombre: "Ecuaciones Diferenciales Ordinarias", id: "ecu_dif", prer: ["calc_int"] },
      { nombre: "Física Calor y Ondas", id: "fis_calor", prer: ["fis_mec"] },
      { nombre: "Administración de Empresas y Organizaciones", id: "adm_emp", prer: ["top_form", "alf_acad_1"] },
      { nombre: "TIPE Sello UV 2", id: "tipe_uv2", prer: ["tipe_uv1"] },
      { nombre: "Idioma 2", id: "idioma2", prer: ["idioma1"] }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Física Electromagnetismo", id: "fis_elec", prer: ["fis_calor"] },
      { nombre: "Estadística y Probabilidades", id: "estad_prob", prer: ["calc_var"] },
      { nombre: "Análisis Financiero y Contable", id: "anal_fin", prer: ["adm_emp"] },
      { nombre: "Termodinámica", id: "termo", prer: ["quim_ing", "fis_calor"] },
      { nombre: "Análisis de Materiales y Diseño de Productos", id: "anal_mat", prer: ["quim_ing"] },
      { nombre: "Principios de Data Science", id: "princ_data", prer: ["programacion"] },
      { nombre: "Idioma 3", id: "idioma3", prer: ["idioma2"] },
      { nombre: "Práctica Básica", id: "pract_bas", prer: ["calc_var", "ecu_dif", "fis_calor", "adm_emp", "tipe_uv2", "idioma2"] }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Inferencia Estadística", id: "infer_est", prer: ["estad_prob"] },
      { nombre: "Gestión Presupuestaria y Costos", id: "gest_pres", prer: ["anal_fin"] },
      { nombre: "Pensamiento Sistémico", id: "pens_sist", prer: ["princ_data"] },
      { nombre: "Sistemas de Información y Administración de Datos", id: "sis_inf", prer: ["princ_data", "pens_sist"] },
      { nombre: "Alfabetización Académica para Ingeniería 2", id: "alf_acad_2", prer: ["alf_acad_1"] },
      { nombre: "Macroeconomía y Microeconomía", id: "macro_micro", prer: ["top_form", "adm_emp"] },
      { nombre: "Idioma 4", id: "idioma4", prer: ["idioma3"] }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Procesos Industriales", id: "proc_ind", prer: ["termo"] },
      { nombre: "Gestión de Talento en las Organizaciones", id: "gest_talento", prer: ["adm_emp", "pens_sist"] },
      { nombre: "Modelamiento", id: "modelamiento", prer: ["infer_est", "algebra_lin"] },
      { nombre: "Visualización de Datos e Inteligencia de Negocios", id: "vis_dat", prer: ["sis_inf"] },
      { nombre: "Economía Circular y Sostenibilidad", id: "eco_circ", prer: ["anal_mat", "macro_micro"] },
      { nombre: "Gestión de la Innovación y el Emprendimiento", id: "gest_emi", prer: ["ingen_emi", "top_form"] },
      { nombre: "Proyecto de Licenciatura", id: "proy_lic", prer: ["proc_ind", "gest_talento", "modelamiento", "vis_dat", "eco_circ", "gest_emi"] },
      { nombre: "Simulación de Procesos y Sistemas", id: "sim_proc", prer: ["proc_ind", "modelamiento"] },
      { nombre: "Investigación de Operaciones", id: "inv_op", prer: ["modelamiento"] }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Gestión de Operaciones 1", id: "gest_op1", prer: ["modelamiento"] },
      { nombre: "Análisis y Estrategia de Negocios", id: "anal_estrat", prer: ["gest_pres", "macro_micro"] },
      { nombre: "Visualización de Datos e Inteligencia de Negocios", id: "vis_dat2", prer: ["sis_inf"] },
      { nombre: "Ingeniería Económica", id: "ing_econ", prer: ["gest_pres"] },
      { nombre: "Proyecto de Licenciatura", id: "proy_lic2", prer: ["proy_lic"] },
      { nombre: "Electivo Profesional 1", id: "electivo1", prer: ["proy_lic"] },
      { nombre: "Electivo Profesional 2", id: "electivo2", prer: ["proy_lic"] },
      { nombre: "Taller de Comunicación Efectiva", id: "taller_com", prer: ["proy_lic"] },
      { nombre: "Simulación de Procesos y Sistemas", id: "sim_proc2", prer: ["proc_ind"] },
      { nombre: "Investigación de Operaciones", id: "inv_op2", prer: ["modelamiento"] }
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      { nombre: "Gestión de Operaciones 2", id: "gest_op2", prer: ["gest_op1"] },
      { nombre: "Gestión de la Cadena de Suministros", id: "gest_cadena", prer: ["gest_op2"] },
      { nombre: "Dirección Estratégica", id: "dir_estrat", prer: ["anal_estrat"] },
      { nombre: "Formulación y Evaluación de Proyectos", id: "form_eval", prer: ["eco_circ"] },
      { nombre: "Simulación de Procesos y Sistemas", id: "sim_proc3", prer: ["sim_proc2"] },
      { nombre: "Desarrollo Organizacional", id: "des_org", prer: ["gest_talento"] },
      { nombre: "Gestión Energética", id: "gest_ener", prer: ["eco_circ"] }
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      { nombre: "Estrategia de Marketing", id: "estr_mark", prer: ["gest_emi"] },
      { nombre: "Gestión de Riesgos", id: "gest_ries", prer: ["gest_ener"] },
      { nombre: "Gestión de la Cadena de Suministros", id: "gest_cadena2", prer: ["gest_cadena"] },
      { nombre: "Project Management", id: "proj_man", prer: ["dir_estrat", "form_eval"] },
      { nombre: "Electivo Profesional 1", id: "electivo1_2", prer: ["electivo1"] },
      { nombre: "Finanzas", id: "finanzas", prer: ["ing_econ"] },
      { nombre: "Taller de Comunicación Efectiva", id: "taller_com2", prer: ["taller_com"] }
    ]
  },
  {
    semestre: "11° Semestre",
    ramos: [
      { nombre: "Proyecto de Título", id: "proy_tit", prer: ["proj_man", "gest_ries", "gest_cadena2", "electivo1_2", "finanzas", "taller_com2"] },
      { nombre: "Práctica Profesional", id: "pract_prof", prer: ["pract_bas"] },
      { nombre: "Electivo Profesional 2", id: "electivo2_2", prer: ["electivo2"] }
    ]
  }
];

// Guardamos el estado de aprobados en localStorage
const storageKey = "mallaEstadoRamos";

// Cargamos estado guardado o creamos uno nuevo
let estadoRamos = JSON.parse(localStorage.getItem(storageKey)) || {};

// Crear container
const container = document.getElementById("semestres-container");

// Función para saber si un ramo está desbloqueado (si sus prerrequisitos están aprobados)
function estaAbierto(ramo) {
  return ramo.prer.every(prerId => estadoRamos[prerId] === true);
}

// Función para actualizar visuales
function actualizarVisuales() {
  // Actualiza cada ramo según su estado
  document.querySelectorAll(".ramo").forEach(el => {
    const id = el.dataset.id;
    if (estadoRamos[id]) {
      el.classList.add("aprobado");
      el.classList.remove("abierto");
      el.classList.remove("bloqueado");
    } else if (estaAbierto(ramosPorId[id])) {
      el.classList.add("abierto");
      el.classList.remove("bloqueado");
      el.classList.remove("aprobado");
    } else {
      el.classList.add("bloqueado");
      el.classList.remove("abierto");
      el.classList.remove("aprobado");
    }
  });
}

// Creamos un mapa para acceso rápido a ramos por ID
const ramosPorId = {};
ramosPorSemestre.forEach(semestre => {
  semestre.ramos.forEach(ramo => {
    ramosPorId[ramo.id] = ramo;
  });
});

// Función para crear cada ramo HTML
function crearRamoHTML(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.dataset.id = ramo.id;
  div.textContent = ramo.nombre;
  div.addEventListener("click", () => {
    // Si está bloqueado no se puede marcar
    if (!estaAbierto(ramo) && !estadoRamos[ramo.id]) return;
    // Cambiar estado aprobado/no aprobado
    estadoRamos[ramo.id] = !estadoRamos[ramo.id];
    localStorage.setItem(storageKey, JSON.stringify(estadoRamos));
    actualizarVisuales();
  });
  return div;
}

// Renderizar toda la malla
function renderizarMalla() {
  container.innerHTML = "";
  ramosPorSemestre.forEach(semestre => {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");
    const h2 = document.createElement("h2");
    h2.textContent = semestre.semestre;
    divSemestre.appendChild(h2);

    semestre.ramos.forEach(ramo => {
      divSemestre.appendChild(crearRamoHTML(ramo));
    });

    container.appendChild(divSemestre);
  });
}

renderizarMalla();
actualizarVisuales();
