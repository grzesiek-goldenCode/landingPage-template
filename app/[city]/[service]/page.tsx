import { CityServicePage } from "@/components/CityServicePage";
import contentData from "@/data/content.json";

export async function generateStaticParams() {
  if (!contentData) return;
  return contentData.pages.map((page) => ({
    city: page.citySlug,
    service: page.serviceSlug,
  }));
}

interface PageProps {
  params: {
    city: string;
    service: string;
  };
}

export default async function CityServicesPage({ params }: PageProps) {
  const pageParams = await params;
  const pageData = contentData.pages.find(
    (page) =>
      page.citySlug === pageParams.city &&
      page.serviceSlug === pageParams.service,
  );

  if (!pageData) {
    return <div>Nie znaleziono strony</div>;
  }
  const { content } = pageData;
  return <CityServicePage data={pageData} />;
}
