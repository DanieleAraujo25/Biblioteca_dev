import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#0D1B2A', textAlign: 'center', padding: '20px' }}>
        <p style={{ marginTop: 10, fontSize: 18, color: '#fff' }}>Bem-vindo clã</p>
        <h1 style={{ fontSize: 28, color: '#fff' }}>
          Biblioteca <span style={{ color: '#ADD8E6' }}>Dev</span>
        </h1>
        <p style={{ color: '#777', marginButon: 10, marginButon: 20 }}>Explore conhecimento sem limites</p>
      </div>

      {/* Search */}
      <input
        placeholder="Buscar livros, autores..."
        style={{
          height: 45,
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: 10,
          padding: '0 15px',
          marginBottom: 20,
        }}
      />

      {/* Categorias */}
      <h2 style={{ fontSize: 20, marginBottom: 10  }}>Categorias</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30, textAlign: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#3B82F6', padding: 15, borderRadius: 10, flex: 1, marginRight: 5, color: '#fff' }}>
          <strong>Conhecimento</strong>
          <p>127 livros</p>
        </div>
        <div style={{ backgroundColor: '#22C55E', padding: 15, borderRadius: 10, flex: 1, margin: '0 5px', color: '#fff' }}>
          <strong>Manuais</strong>
          <p>89 livros</p>
        </div>
        <div style={{ backgroundColor: '#EF4444', padding: 15, borderRadius: 10, flex: 1, marginLeft: 5, color: '#fff' }}>
          <strong>Entretenimento</strong>
          <p>203 livros</p>
        </div>
      </div>

      {/* Recomendações */}
      <div style={{ display: 'flex',  alignItems: 'center' }}>
        <h2>Recomendações</h2>
        <a href="#" style={{ color: '#3B82F6' }}>Ver todos</a>
      </div>

      {/* Livros Conhecimento */}
      <h3 style={{ marginTop: 15, textAlign: 'center', padding: '20px' }}>Conhecimento</h3>
      <div style={{ display: 'flex', overflowX: 'auto', gap: 10, marginTop: 10 }}>
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
      </div>

      {/* Livros Manuais */}
      <h3 style={{ marginTop: 25 , textAlign: 'center', padding: '20px'}}>Manuais</h3>
      <div style={{ display: 'flex', overflowX: 'auto', gap: 10, margin: '10px 0 30px' }}>
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
      </div>

      {/* Livros Entretenimento */}
      <h3 style={{ marginTop: 35, textAlign: 'center', padding: '20px' }}>Entretenimento</h3>
      <div style={{ display: 'flex', overflowX: 'auto', gap: 10, margin: '10px 0 30px' }}>
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
        <img src="https://via.placeholder.com/100" alt="" style={{ width: 100, height: 140, borderRadius: 8 }} />
      </div>

      <footer style={{ marginTop: 50, padding: '20px 0', backgroundColor: '#f1f1f1', textAlign: 'center', padding: '20px' }}>
        <p style={{ color: '#777' }}>Biblioteca Dev © 2023</p>
        <p style={{ color: '#777' }}>Feito por ✨Daniele</p>
      </footer>
    </div>);
}

      export default App;