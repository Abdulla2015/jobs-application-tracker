# Job Tracker Add - Claude Skill

**Purpose:** Allow natural language interaction to add jobs to your application tracker.

## Usage

### From Claude AI:
- "Track this senior frontend role at Stripe"
- "Add job: Senior React Engineer at Netflix, posted 2024-01-15, remote, salary $120k"
- "Parse https://linkedin.com/jobs/application-12345"

### Via CLI:
```bash
claude add-job "Senior Frontend at Stripe" --location "San Francisco" --salary "$120k-150k"
```

## Skill Implementation

This skill works by:

1. **Extracting structured data** from natural language or URLs using Claude's reasoning
2. **Validating** the extracted fields against our schema
3. **Creating** the job and application records in Convex

### Fields Extracted:
- Company name
- Role title
- Location (optional)
- Salary range (optional)
- Job posting URL (optional)
- Application notes (optional)

## Integration

The skill calls the Convex mutation `createApplicationFromNaturalLanguage` which:
- Creates/updates the company record
- Creates the job posting
- Creates the initial application with status "applied"

## Permissions

The skill requires:
- Write access to Convex database
- No special permissions for single-user setup

## Error Handling

- Validates all required fields before insertion
- Returns clear error messages for missing data
- Suggests corrections for unrecognized companies/roles