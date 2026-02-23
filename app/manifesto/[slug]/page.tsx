import ProposalDetailClient from './ProposalDetailClient';

export const dynamic = 'force-dynamic';

interface ProposalContent {
  id: number;
  title: string | null;
  description: string;
}

interface Proposal {
  id: number;
  uuid: string;
  title: string;
  description: string;
  serial: string;
  contents: ProposalContent[];
  created_at: string;
}

// Fetch all proposals (no cache)
async function getAllProposals(): Promise<Proposal[]> {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.aminul-haque.com/api/v1';
    const response = await fetch(`${apiBaseUrl}/proposal`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Failed to fetch proposals: ${response.statusText}`);
      return [];
    }

    const data = await response.json();

    // Handle the API response structure: { success: true, data: { data: [...] } }
    let proposalsData: Proposal[] = [];
    if (data.success && data.data) {
      if (Array.isArray(data.data)) {
        proposalsData = data.data;
      } else if (data.data.data && Array.isArray(data.data.data)) {
        proposalsData = data.data.data;
      }
    } else if (Array.isArray(data)) {
      proposalsData = data;
    } else if (data.data && Array.isArray(data.data)) {
      proposalsData = data.data;
    }

    return proposalsData;
  } catch (err) {
    console.error('Error fetching proposals:', err);
    return [];
  }
}

// Fetch individual proposal by UUID or ID
async function getProposal(slug: string): Promise<Proposal | null> {
  try {
    // Fetch all proposals and find the one matching the slug
    const proposals = await getAllProposals();
    
    // Try to find by UUID first, then by ID
    const proposal = proposals.find(
      (p) => p.uuid === slug || p.id.toString() === slug
    );

    return proposal || null;
  } catch (err) {
    console.error('Error fetching proposal:', err);
    return null;
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProposalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = await getProposal(slug);
  return <ProposalDetailClient proposal={proposal} />;
}

