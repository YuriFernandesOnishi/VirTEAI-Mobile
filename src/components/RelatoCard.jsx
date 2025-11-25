import React from 'react';
import { 
  CardRelatoCliente,
  ImageRelatos,
  CardTextosRelatos,
  TextoClientes,
  CardTextoClientes,
} from '../styles/home';

export default function RelatoCard({ imageSource, titulo, texto }) {
  return (
    <CardRelatoCliente>
      <ImageRelatos source={imageSource} />
      <CardTextosRelatos>
        <TextoClientes>{titulo}</TextoClientes>
        <CardTextoClientes>{texto}</CardTextoClientes>
      </CardTextosRelatos>
    </CardRelatoCliente>
  );
}
