function processPayment(payment) {
    switch (payment.status) {
      case "received":
        console.log("Boleto emitido. Aguardando pagamento.");
        break;
      case "preparing":
        console.log("Processando pagamento.");
        break;
      case "ready":
        console.log("Dinheiro disponível na Conta Bancária.");
        break;
      case "delivered":
        console.log("Dinheiro a ser transferido para outra conta.");
        break;
      case "canceled":
        console.log("Envio cancelado. Entre em contato para mais informações.");
        break;
      default:
        console.log("Status do envio inválido.");
    }
  }
  
  // Exemplo de uso
  const payment1 = { status: "received" };
  const payment2 = { status: "ready" };
  const payment3 = { status: "canceled" };
  
  processPayment(payment1); // Saída: Boleto emitido. Aguardando pagamento.
  processPayment(payment2); // Saída: Dinheiro disponível na Conta Bancária.
  processPayment(payment3); // Saída: Envio cancelado. Entre em contato para mais informações.

  
// Algorithm: Inúmeros produtos agrupados e utilizar tal estrutura para validações e erros. de transferência, falta de preenchimento, etc. de acordo com a decisão do usário.