SELECT v.Placa, v.Cidade_Estado
FROM Veiculo v
INNER JOIN Responsabilidade r ON v.Placa = r.Veiculo_Placa
INNER JOIN Proprietario p ON r.Proprietario_ID = p.Proprietario_ID
WHERE p.Nome = 'Joaquim Silva';