function getSignalsFromModel(model, key) {
  if (!model || !key) {
    throw new Error('Invalid model or key');
  }
  const signals = model.getSignals();
  if (!signals || !signals[key]) {
    throw new Error(`No signal found for key ${key}`);
  }
  return signals[key];
}
