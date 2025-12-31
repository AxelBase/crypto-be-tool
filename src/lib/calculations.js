// All calculation logic for FR1 and FR2
// Exported functions for use in pages

/**
 * Calculates the break-even price for a portfolio based on multiple entries.
 * @param {Array<{quantity: number, price: number, fee: number}>} entries - Array of purchase entries
 * @returns {number} The break-even price
 */
export function calculateBreakEven(entries) {
  let totalQuantity = 0;
  let totalCost = 0;

  for (const entry of entries) {
    const qty = parseFloat(entry.quantity) || 0;
    const price = parseFloat(entry.price) || 0;
    const fee = parseFloat(entry.fee) || 0;

    totalQuantity += qty;
    totalCost += (qty * price) + fee;
  }

  return totalQuantity > 0 ? totalCost / totalQuantity : 0;
}

/**
 * Calculates the recovery strategy using minimal inputs.
 * Performs complex background simulations via binary search (iterative) to find optimal additional investment.
 * Target recovery percentage: percentage to reduce the loss gap by (e.g., 50% means halve the gap between BE and market).
 * @param {number} currentQuantity - Current total quantity held
 * @param {number} currentBE - Current break-even price
 * @param {number} currentMarket - Current market price
 * @param {number} targetRecoveryPct - Target recovery percentage (0-100)
 * @returns {Object} {additionalInvestment: number, newBreakEven: number, strategy: string}
 */
export function calculateRecovery(currentQuantity, currentBE, currentMarket, targetRecoveryPct) {
  const currentTotalCost = currentBE * currentQuantity;

  if (currentMarket >= currentBE) {
    return {
      additionalInvestment: 0,
      newBreakEven: currentBE,
      strategy: 'Already at or above break-even. No additional buy needed.'
    };
  }

  const gap = currentBE - currentMarket;
  const targetGap = gap * (1 - targetRecoveryPct / 100);
  const targetBE = currentMarket + targetGap;

  if (targetBE <= currentMarket) {
    return {
      additionalInvestment: 0,
      newBreakEven: currentBE,
      strategy: 'Target BE is below market price. Adjustment not possible.'
    };
  }

  // Function to compute new BE for a given additional investment
  function getNewBE(additionalInvest) {
    const additionalQty = additionalInvest / currentMarket;
    return (currentTotalCost + additionalInvest) / (currentQuantity + additionalQty);
  }

  // Binary search for optimal additional investment (iterative simulation)
  let low = 0;
  let high = currentTotalCost * 10; // Arbitrary upper bound for search
  let mid = 0;
  let iterations = 0;
  const maxIterations = 1000;
  const tolerance = 0.0001;

  while (low <= high && iterations < maxIterations) {
    mid = (low + high) / 2;
    const currBE = getNewBE(mid);

    if (Math.abs(currBE - targetBE) < tolerance) {
      break;
    } else if (currBE > targetBE) {
      low = mid + tolerance;
    } else {
      high = mid - tolerance;
    }

    iterations++;
  }

  const additionalInvestment = mid > 0 ? mid : 0;
  const newBreakEven = getNewBE(additionalInvestment);
  const additionalQty = additionalInvestment / currentMarket;

  const strategy = `Buy an additional ${additionalQty.toFixed(4)} units ($${additionalInvestment.toFixed(2)}) at $${currentMarket.toFixed(2)} to achieve a new break-even of $${newBreakEven.toFixed(2)}.`;

  return { additionalInvestment, newBreakEven, strategy };
}