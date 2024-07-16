import React, { useState } from 'react';
import styles from './NuevoVideo.module.css';

const NuevoVideo = ({ agregarVideo }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.imagen) tempErrors.imagen = 'El enlace es obligatorio';
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            agregarVideo(formData);
            handleReset();
        }
    };

    const handleReset = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagen: '',
            video: '',
            descripcion: ''
        });
        setErrors({});
    };

    return (
        <div>
            <h1 className={styles.titulo}>Nuevo video</h1>
            <h2 className={styles.subtitulo}>Complete el formulario para crear una nueva tarjeta de video</h2>
            <h3 className={styles.tarjeta}>Crear Tarjeta</h3>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.titulos}>Título</label>
                        <input
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            placeholder="Ingrese el título"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.titulos}>Categoría</label>
                        <select
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="Front End">Front End</option>
                            <option value="Back End">Back End</option>
                            <option value="Innovación y Gestión">Innovación y Gestión</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.titulos}>Imagen</label>
                        <input
                            type="text"
                            name="imagen"
                            value={formData.imagen}
                            onChange={handleChange}
                            placeholder="Ingrese el enlace de la imagen"
                            className={errors.imagen ? styles.error : ''}
                        />
                        {errors.imagen && <span className={styles.errorText}>{errors.imagen}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.titulos}>Video</label>
                        <input
                            type="text"
                            name="video"
                            value={formData.video}
                            onChange={handleChange}
                            placeholder="Ingrese el enlace del video"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.titulos}>Descripción</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            placeholder="¿De qué se trata este video?"
                        ></textarea>
                    </div>
                    <div className={styles.formActions}>
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={handleReset}>Limpiar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevoVideo;
