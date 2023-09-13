function Paciente({ paciente }) {
    return (
        <>
            <p>Paciente: {paciente.nome}</p>
            <p>Escala: {paciente.escala}</p>
            <p>Turno: {paciente.turno}</p>
            <p>Código: {paciente.codigo}</p>
            <p>Pronturáio: {paciente.num_reg}</p>
        </>
    )
}

export default Paciente