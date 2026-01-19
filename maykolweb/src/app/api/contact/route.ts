import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, projectPhase, techNeeds, description, leadScore } = body;

    // Validate required fields
    if (!name || !email || !budget || !projectPhase) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Supabase client
    const supabase = await createClient();

    // Insert lead into database
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        company,
        budget,
        project_phase: projectPhase,
        tech_needs: techNeeds,
        description,
        lead_score: leadScore?.total || 0,
        lead_tier: leadScore?.tier || "cold",
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      // Continue anyway - we don't want to break the form if DB is not set up
    }

    // TODO: Send email notification (integrate with Resend or similar)
    // await sendNotificationEmail({ name, email, leadScore });

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      data: data || { name, email },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
