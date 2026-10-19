import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase';

export default function App() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegistros() {
      try {
        // Consulta a la tabla 'Panaderia' (o 'todos' según tu configuración en Supabase)
        const { data, error } = await supabase
          .from('Panaderia')
          .select('*');

        if (error) {
          console.error('Error al obtener los registros:', error);
        } else if (data) {
          setRegistros(data);
        }
      } catch (err) {
        console.error('Excepción:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistros();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Registros de Panadería</h2>
      
      {loading ? (
        <p>Cargando registros...</p>
      ) : registros.length === 0 ? (
        <p>No hay registros guardados todavía.</p>
      ) : (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {registros.map((item) => (
            <li key={item.id} style={{ marginBottom: '8px' }}>
              {/* Muestra el campo 'name' o la propiedad que almacene el registro */}
              <strong>{item.name || 'Sin nombre'}</strong> 
              {item.created_at && <span style={{ color: '#666', fontSize: '12px' }}> (Registrado el: {new Date(item.created_at).toLocaleDateString()})</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}