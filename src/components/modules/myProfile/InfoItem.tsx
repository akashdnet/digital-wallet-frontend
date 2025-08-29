export default function InfoItem({
  label,
  value,
  capitalize,
}: {
  label: string;
  value?: string;
  capitalize?: boolean;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <p
        className={`font-medium ${
          capitalize ? "capitalize" : ""
        } text-gray-800`}
      >
        {value || "—"}
      </p>
    </div>
  );
}