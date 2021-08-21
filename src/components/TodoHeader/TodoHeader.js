export const TodoHeader = () => {
    return (
        <div className="container-fluid mb-5 shadow-lg">
            <div className="row">
                <div className="col px-0">
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <div>
                            <h1 className="display-5 fw-bold text-white">Lista de Tareas</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4">Añade tu lista de tareas y guardalas en tu navegador. Asegurate de no borrar los datos de navegacion para no perder tus tareas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
