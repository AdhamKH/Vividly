export default async function getService(serviceId) {
  const res = await fetch(
    `https://api.adgrouptech.com/api/v1/services/${serviceId}`
  );

  if (!res.ok) throw new Error("failed to fetch service");

  return res.json();
}
