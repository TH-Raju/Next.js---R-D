import Card from "@/Components/card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notification;
