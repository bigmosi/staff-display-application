import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "biokeeper",
  description:
    "Biokeeper. Social Networking Platforms. Kampala, Central 14 followers. Preserving a Collective Memory of Family History for Future Generations.",
};

const RootLayout = ({ children }: any) => {

  return (
    <html lang="en">
        <main>
        <Navigation />
         {children}
        </main>
    </html>
  );
};

export default RootLayout;
