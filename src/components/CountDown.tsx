import { useEffect, useState } from "react";

export default function CountDown({ endTime }: { endTime: string }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const target = new Date(endTime).getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  if (timeLeft === 0) return <p className="text-xs text-red-600">Expirado</p>;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <p className="text-xs text-gray-500">
      {days}d {hours}h {minutes}m {seconds}s
    </p>
  );
}
