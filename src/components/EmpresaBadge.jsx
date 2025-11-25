import React from 'react';
import { CardEmpresa, EmpresaImage, DescricaoEmpresas } from '../styles/home';

export default function EmpresaBadge({ imageSource, descricao }) {
  return (
    <CardEmpresa>
      <EmpresaImage source={imageSource} />
      <DescricaoEmpresas>{descricao}</DescricaoEmpresas>
    </CardEmpresa>
  );
}
