// QS Smart Auto Assign Logic

export function autoAssignTechnician(technicians) {
  if (!technicians || technicians.length === 0) return null;

  // Priority:
  // 1️⃣ Nearest distance
  // 2️⃣ Highest rating
  // 3️⃣ Least active jobs
  const sorted = [...technicians].sort((a, b) => {
    if (a.distanceKm !== b.distanceKm)
      return a.distanceKm - b.distanceKm;

    if (a.rating !== b.rating)
      return b.rating - a.rating;

    return (a.activeJobs || 0) - (b.activeJobs || 0);
  });

  return sorted[0];
}
